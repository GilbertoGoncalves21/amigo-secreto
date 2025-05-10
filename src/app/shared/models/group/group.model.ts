import { Integrant } from "../integrant/integrant.model";

export interface Group {
  id: number;
  name: string;
  participants: Integrant[];
}
