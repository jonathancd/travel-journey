import { PageTitleProps } from "../../types/pageTitle";

export const PageTitle = ({ name }: PageTitleProps) => (
  <div className="page-title absolute left-16 top-0 mt-[13vh] z-50">{name}</div>
);
