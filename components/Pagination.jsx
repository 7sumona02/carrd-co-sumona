import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "./Navbar"

const Pagination = () => {
  return (
    <Tabs defaultValue="about" className="w-[400px] ml-2">
        <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
        </TabsList>
        <div className="bg-muted w-[32.8vw] h-[21.4vh] rounded-b-sm rounded-tr-sm relative -mt-[0.5px]">
          <div className="absolute top-2">
            <Navbar />
          </div>
          <div className="pt-10">
            <TabsContent value="about">Make changes to your account here.</TabsContent>
            <TabsContent value="rules">Change your password here.</TabsContent>
            <TabsContent value="interests">Change your password here.</TabsContent>
          </div>
        </div>
    </Tabs>
  )
}

export default Pagination
