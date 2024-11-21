import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updatedThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const getThumbnail = () => {
    updatedThumbnail(id)
  }

  const updateClass = isActive ? `thumbnail active` : `thumbnail`

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={getThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={updateClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
