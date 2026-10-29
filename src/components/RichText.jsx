export default function RichText({ html, className = '' }) {
  if (!html) return null
  return (
    <div
      className={`prose-aether ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
