'use client'
import protectedPage from "@/shared/hocs/protectedPage"
import UserProfile from "@/widgets/UserProfile"


function ProfilePage() {
    return <UserProfile/>
}


export default protectedPage(ProfilePage)

