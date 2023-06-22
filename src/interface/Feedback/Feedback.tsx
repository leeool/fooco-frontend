import { ButtonSecondary } from "@components/Form"
import React from "react"
import { Container } from "./Feedback.styled"
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react"
import { useMutation } from "react-query"
import mutateFeedbackPost from "src/mutations/mutateFeedbackPost"
import useUserStore from "src/stores/UseUserStore"
import ConfettiExplosion from "react-confetti-explosion"

interface Props {
  content: IComment | IReply | IUserPosts
  target: "reply" | "post"
}

const Feedback = ({ content, target }: Props) => {
  const { userData } = useUserStore()
  const [isExploding, setIsExploding] = React.useState(false)
  const [feedback, setFeedback] = React.useState<"like" | "dislike" | null>(
    null
  )
  const {
    mutateAsync: mutateFeedback,
    isLoading: loadingFeedback,
    data: dataFeedback,
  } = useMutation(mutateFeedbackPost())

  const handleFeedback = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (loadingFeedback) return

    const type = e.currentTarget.dataset.feedback as "like" | "dislike"

    if (!type || !userData) return

    await mutateFeedback(
      {
        postId: content.id,
        userId: userData.id,
        target,
        feedbackType: type,
      },
      {
        onSuccess: () => {
          setFeedback((prev) => {
            setIsExploding(true)
            if (prev === type) return null
            return type
          })
        },
      }
    )
  }

  React.useEffect(() => {
    setFeedback(null)
    if (!userData) return

    const userLikedPost = content.users_liked.includes(userData.id)
    const userDislikedPost = content.users_disliked.includes(userData.id)

    if (userLikedPost) return setFeedback("like")
    else if (userDislikedPost) return setFeedback("dislike")
  }, [userData, content])

  return (
    <Container data-loading={loadingFeedback}>
      <ButtonSecondary
        onClick={handleFeedback}
        data-feedback="like"
        data-active={feedback === "like"}
        style={{ padding: "0" }}
        title="Achei relevante"
      >
        <ChevronUpIcon />
      </ButtonSecondary>
      <span>
        {dataFeedback !== undefined ? String(dataFeedback) : content.points}
        {isExploding && (
          <ConfettiExplosion
            onComplete={() => setIsExploding(false)}
            particleCount={50}
            duration={3000}
          />
        )}
      </span>
      <ButtonSecondary
        onClick={handleFeedback}
        data-feedback="dislike"
        data-active={feedback === "dislike"}
        style={{ padding: "0" }}
        title="Não achei relevante"
      >
        <ChevronDownIcon />
      </ButtonSecondary>
    </Container>
  )
}

export default Feedback
