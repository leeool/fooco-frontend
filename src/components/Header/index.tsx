import React from "react"
import { HeaderContainer } from "./styles"
import LoggedOut from "./loggedOut"
import useUserStore from "src/stores/UseUserStore"
import LoggedIn from "./loggedIn"
import Loading from "src/helpers/Loading"
import "react-loading-skeleton/dist/skeleton.css"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"
import UseMatchWindowSize from "src/hooks/UseWindowSize"

const index = () => {
  const { isLoggedIn, loading } = useUserStore()
  const [hide, setHide] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setHide(true)
      else if (window.scrollY <= 100) setHide(false)
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  React.useEffect(() => {
    setHide(false)
  }, [window.location.pathname])

  return (
    <HeaderContainer isScrolledDown={hide}>
      {isLoggedIn ? (
        <LoggedIn />
      ) : (
        <Loading
          fallback={<HandleHeaderLoading />}
          loading={loading || !isLoggedIn}
        >
          <LoggedOut />
        </Loading>
      )}
    </HeaderContainer>
  )
}

const HandleHeaderLoading = () => {
  const match = UseMatchWindowSize(1000)

  return match ? <MobileLoading /> : <DesktopLoading />
}

const MobileLoading = () => {
  return (
    <SkeletonLoad>
      <Skeleton
        count={1}
        height={51}
        borderRadius={10}
        containerClassName="logo"
        width={100}
      />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Skeleton
          count={1}
          height={30}
          width={70}
          containerClassName="loading"
        />
        <Skeleton
          count={1}
          height={30}
          width={70}
          containerClassName="loading"
        />
        <Skeleton
          count={1}
          height={30}
          width={70}
          containerClassName="loading"
        />
      </div>
    </SkeletonLoad>
  )
}

const DesktopLoading = () => {
  return (
    <SkeletonLoad>
      <Skeleton
        count={1}
        height={51}
        borderRadius={10}
        containerClassName="loading"
        width={200}
      />
      <div style={{ display: "flex", gap: "2rem" }}>
        <Skeleton
          count={1}
          height={40}
          containerClassName="loading"
          width={100}
        />
        <Skeleton
          count={1}
          height={40}
          containerClassName="loading"
          width={100}
        />
        <Skeleton
          count={1}
          height={40}
          containerClassName="loading"
          width={120}
        />
      </div>
    </SkeletonLoad>
  )
}

export default index
