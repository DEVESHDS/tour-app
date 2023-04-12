export interface HighLight {
  title: string;
  description: string;
  image: string;
}

interface CategoryActivity {
  title: string;
}

export interface Categories {
  name: string;
  activities: Array<CategoryActivity>;
}

interface SubActivities {
  name: string;
}

export interface Activities {
  name: string;
  description: string;
  image: string;
  activities: Array<SubActivities>;
}
