export interface Ration {
  type: string;
  name: string;
  gramsToCarbohydrate: number;
  bloodGlucoseIndex: number | undefined;
  weight?: number;
  rations?: number | undefined;
}
