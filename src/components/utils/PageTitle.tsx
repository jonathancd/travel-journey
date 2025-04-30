import { PageTitleProps } from "../../types/pageTitle";

export const PageTitle = ({ name }: PageTitleProps) => (
  <div className="page-title absolute left-0 top-[-20px] z-50">{name}</div>
);
