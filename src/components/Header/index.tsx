import React from "react"
import { HeaderContainer } from "./styles"
import LoggedOut from "./loggedOut"
import useUserStore from "src/stores/UseUserStore"
import LoggedIn from "./loggedIn"
import Loading from "src/helpers/Loading"
import "react-loading-skeleton/dist/skeleton.css"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"

const index = () => {
  const { isLoggedIn, loading } = useUserStore()

  return (
    <HeaderContainer>
      {isLoggedIn ? (
        <LoggedIn />
      ) : (
        <Loading
          fallback={
            <SkeletonLoad>
              <Skeleton width={200} count={1} height={80} borderRadius={10} />
              <Skeleton width={500} count={1} height={40} />
              <Skeleton width={200} count={1} height={40} />
            </SkeletonLoad>
          }
          loading={loading && !isLoggedIn}
        >
          <LoggedOut />
        </Loading>
      )}
    </HeaderContainer>
  )
}

export default index
