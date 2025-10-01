import SectionLayout from '../components/layout/SectionLayout';
import Box from './component/box';
import { BlogBoxList } from './data/blogs';

function Blog() {
  return (
  <SectionLayout id="Blog">
    <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-3xl lg:text-4xl xl:text-5xl pb-6 md:pb-8 lg:pb-10 xl:pb-12">Blog</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 md:gird-rows-1 gap-6 h-[700px] md:h-[900px] lg:h-[500px]">
      {BlogBoxList.map(BlogBoxListProps => (
          <Box
            key={BlogBoxListProps.title}
            link={BlogBoxListProps.link}
            imgFile={BlogBoxListProps.imgFile}
            imgPos={BlogBoxListProps.imgPos}
            title={BlogBoxListProps.title}
          />
        ))
      }
    </div>
  </SectionLayout>
 )
} 

export default Blog
