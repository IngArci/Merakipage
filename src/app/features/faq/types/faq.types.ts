export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  description: string;
  items: FAQItem[];
}
