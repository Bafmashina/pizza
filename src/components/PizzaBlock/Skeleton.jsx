import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="128" r="125" /> 
    <rect x="0" y="300" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="402" rx="10" ry="10" width="95" height="30" /> 
    <rect x="141" y="401" rx="20" ry="20" width="135" height="46" /> 
    <rect x="0" y="268" rx="10" ry="10" width="280" height="20" />
  </ContentLoader>
)

export {Skeleton}