import projects from '@/data/projects'
import ProjContentLayout from '@/components/Project/ProjectContentLayout'
import ProjContent from '@/components/Project/ProjectContent'
import ToolsContent from '@/components/Project/ToolsContent'
import ToolsItems from '@/components/Project/ToolItems'

type Props = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects[params.slug]
  return (
    <ProjContentLayout id={`${project.title.toLowerCase().replace(/\s+/g, '-')}-project`}>
        <ProjContent title={project.title} paragraphs={project.paragraphs} />
        {params.slug === 'm2m' && (
            <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-10">
                📄 View published paper:&nbsp;
                <a
                href="https://ieeexplore.ieee.org/document/10903018"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1A2B4C] transition"
                >
                IEEE Region 10 International Conference TENCON
                </a>
            </p>
        )}
        <ToolsContent>
            <ToolsItems items={project.tools} />
        </ToolsContent>
    </ProjContentLayout>
  )
}
