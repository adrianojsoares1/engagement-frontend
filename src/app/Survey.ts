export interface Survey {
  survey: number;
  creator: string;
  groups: Group[];
}

interface Group {
  groupName: string;
  questions: Question[];
}

interface Question {
  question: string;
  responses: string[];
}
