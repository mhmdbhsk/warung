export interface CategoryType {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string | null;
  menu_order: string;
  count: string;
  image: {
    id: string | null;
    date_created: string | null;
    date_created_gmt: string | null;
    date_modified: string | null;
    date_modified_gmt: string | null;
    src: string | null;
    name: string | null;
    alt: string | null;
  };
}
