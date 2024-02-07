export interface categoryMenu {
  categoryName: string | null | undefined;
  categoryID: number | null | undefined;
  fkParentID?: number | undefined | '';
  subCategory?: categoryMenu[];
}
