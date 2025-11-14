export interface ProyectInterface{
    id: string,
    title: string,
    description: string,
    image: string,
    technologies: string[],
    githubUrl: string,
    liveUrl?: string,
    category: string
}
export interface ProyectCardProps{
    project: ProyectInterface,
    addToProjectsRef: (el: HTMLDivElement | null) => void
}