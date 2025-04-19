import { PageTitleProps } from "../../types/pageTitle";

export const PageTitle = ({ name }: PageTitleProps) => (
  <div className="page-title absolute left-16 top-0 mt-[25vh]">{name}</div>
);
