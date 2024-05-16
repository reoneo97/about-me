/** @jsx jsx */
import type { HeadFC, PageProps } from "gatsby";
import { jsx, Heading, Text} from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";


export type MBPageProps = {
  page: {
    title: string;
    slug: string;
    excerpt: string;
  };
};

const AboutPage: React.FC<React.PropsWithChildren<PageProps<MBPageProps>>> = ({
  data: { page },
  children,
}) => (
  <Layout>
    <Text
      children={`Reo `}
      sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}
    />
    <Text children={`Neo`} sx={{ fontSize: [4, 5, 6], color: `heading` }} />
  </Layout>
);

export default AboutPage;

export const Head: HeadFC<MBPageProps> = ({ data: { page } }) => (
  <Seo title={page.title} description={page.excerpt} />
);
