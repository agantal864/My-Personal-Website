import SectionLayout from '@/app/components/layout/SectionLayout';
import BentoBox from './components/BentoBox';
import { BentoList } from './data/projects';

function Projects() {
    return (
        <SectionLayout id="projects">
            <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-3xl lg:text-4xl xl:text-5xl pb-6 md:pb-8 lg:pb-10 xl:pb-12">Projects</h1>
            <div className="flex w-full justify-center items-center">
                <div className="grid h-[2400px] md:h-[1500px] w-full grid-cols-1 md:grid-cols-10 md:grid-rows-18 gap-6">  
                    {BentoList.map(BentoBoxProps => (
                        <BentoBox
                            key={BentoBoxProps.slug}
                            col={BentoBoxProps.col}
                            row={BentoBoxProps.row}
                            slug={BentoBoxProps.slug}
                            imagefile={BentoBoxProps.imagefile}
                            title={BentoBoxProps.title}
                            description={BentoBoxProps.description}
                        />
                    ))}               
                </div>
            </div> 
        </SectionLayout>
    )
}

export default Projects;