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
              <Skeleton
                count={1}
                height={51}
                borderRadius={10}
                containerClassName="loading"
              />
              <Skeleton count={1} height={40} containerClassName="loading" />
              <div style={{ display: "flex", gap: "1rem" }}>
                <Skeleton count={1} height={30} containerClassName="loading" />
                <Skeleton count={1} height={30} containerClassName="loading" />
                <Skeleton count={1} height={30} containerClassName="loading" />
              </div>
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
