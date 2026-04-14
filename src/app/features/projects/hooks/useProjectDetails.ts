import { useParams, useNavigate } from 'react-router';
import { useFirestoreCached } from '../../../hooks/useFirestoreCached';
import { projectsData } from '../../../data/projectsData';
import { Project, ProgressUpdate } from '../../../types/project';

export function useProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = slug ? (projectsData[slug] as Project) : null;

  // ✅ Lectura única + caché 30 min en localStorage
  // Antes usaba onSnapshot (listener en tiempo real) que acumulaba lecturas.
  // Los avances de obra y videos no cambian en tiempo real desde el cliente.
  const { data: firebaseAvances } = useFirestoreCached<ProgressUpdate>(
    'avances_obra',
    'projectSlug',
    slug || ''
  );
  const { data: firebaseVideos } = useFirestoreCached<{
    videoId: string;
    category: 'informesGestion' | 'avancesObra';
  }>(
    'videos_youtube',
    'projectSlug',
    slug || ''
  );

  // Merge: Firebase primero (más recientes), luego datos estáticos
  const combinedProgress = [
    ...(firebaseAvances || []),
    ...(project?.progress || [])
  ];

  const combinedVideos = {
    informesGestion: [
      ...(firebaseVideos?.filter(v => v.category === 'informesGestion').map(v => v.videoId) || []),
      ...(project?.videos?.informesGestion || [])
    ],
    avancesObra: [
      ...(firebaseVideos?.filter(v => v.category === 'avancesObra').map(v => v.videoId) || []),
      ...(project?.videos?.avancesObra || [])
    ]
  };

  return {
    slug,
    project,
    combinedProgress,
    combinedVideos,
    isValid: !!project,
    navigate
  };
}
