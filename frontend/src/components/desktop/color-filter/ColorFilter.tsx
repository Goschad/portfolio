import './style.css'

interface ColorFilterProps {
    section: string | null
}

const colorMap: Record<string, string> = {
    skills:   'rgba(200, 0, 0, 0.85)',
    projects: 'rgba(161, 121, 188, 0.85)',
}

export default function ColorFilter({ section }: ColorFilterProps)
{
    return (
        <div 
            className="filter" 
            style={{ background: colorMap[section ?? ''] ?? 'transparent' }}
        />
    )
}