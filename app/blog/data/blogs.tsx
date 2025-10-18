export interface BlogBoxListProps {
    link: string
    imgFile: string
    imgPos: string
    title: string
}

export const BlogBoxList: BlogBoxListProps[] = [
    {   
        link:"https://azis-agantal-blog.vercel.app/",
        imgFile:"life.jpg",
        imgPos:"bg-right",
        title:"LIFE"
    },
    {
        link:"https://sports50.sport.blog/hook-them/",
        imgFile:"dota.png",
        imgPos:"bg-left",
        title:"ESPORTS"
    }
]


