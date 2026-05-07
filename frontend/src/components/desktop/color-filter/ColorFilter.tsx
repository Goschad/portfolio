import './style.css'

interface ColorFilterProps {
    section: string | null
}

const colorMap: Record<string, string> = {
    skills:   'rgba(200, 0, 0, 0.85)',
    projects: 'rgba(160, 213, 133, 0.85)',
    playlist: 'rgba(0, 0, 70, 0.85)',
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