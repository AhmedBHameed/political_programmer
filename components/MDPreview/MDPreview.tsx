import {components} from './components';
import MDX from '@mdx-js/runtime';

export interface Source {
  compiledSource: string;
  renderedOutput: string;
  scope?: Record<string, unknown>;
}

interface MDPreviewProps {
  markdown: string;
}

const MDPreview: React.FC<MDPreviewProps> = ({markdown}) => {
  return markdown ? (
    // <MDXRemote {...mdxSource} components={components} lazy />
    <MDX components={components} scope={{somethingInScope: 1}}>
      {markdown}
    </MDX>
  ) : (
    <></>
  );
};

export {components};
export default MDPreview;
