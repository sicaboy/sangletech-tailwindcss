export default function WatchPreview(props) {

  const { vimeoVideoId } = props
  const link = `https://player.vimeo.com/video/${vimeoVideoId || 534879325}`

  return (
    <div className="mx-auto text-center">
      <h2 className="text-3xl font-semibold capitalize">Xem Trailer</h2>
      <iframe className="mx-auto" src={link} width="640" height="564" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  )
}


