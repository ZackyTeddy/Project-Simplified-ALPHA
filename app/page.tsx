import Container from "@/components/ui/container"

const user = {
  "name" : "Zack",
  "role" : "Developer",
  "status": "Agent"
}

export default function Home() {
  return (
    <Container>
      <div className="flex flex-row">
        <div className="basis-1/4 relative px-4 pt-12 sm:px-6 lg:px-8 flex flex-col items-start h-full justify-between w-full border-r">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] ss:leading-[75px] leading-[40px]">
            Hello {" "}
            <span className="text-gradient">{user.name}!</span>
          </h1>
          <h2 className="font-poppins ss:text-[50px] text-[20px] ss:leading-[50px] leading-[30px]">
            Let's get to work...
          </h2>
        </div>


        <div className="basis-3/4 overflow-scroll overflow-x-auto">
        <div className="relative px-4 pt-12 sm:px-6 lg:px-8 flex flex-col items-start h-full justify-between w-full border-r">

          <div className="flex-col bg-black-gradient-2 w-[700px] h-[250px] rounded-sm p-4 my-4">
            <h2 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] ss:leading-[75px] leading-[40px]">
              Jump {" "}
              <span className="text-gradient-blue">back in</span>
            </h2>
            <h4 className="font-poppins ss:text-[50px] text-[20px] ss:leading-[50px] leading-[30px]">
              Continue where you left off
            </h4>
          </div>

          <div className="flex-col bg-black-gradient-2 w-[700px] h-[250px] rounded-sm p-4 my-4">
            <h2 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] ss:leading-[75px] leading-[40px]">
              Your {" "}
              <span className="text-gradient-green">Teams</span>
            </h2>
            <h4 className="font-poppins ss:text-[50px] text-[20px] ss:leading-[50px] leading-[30px]">
              All deployed teams
            </h4>
          </div>

          <div className="flex-col bg-black-gradient-2 w-[700px] h-[250px] rounded-sm p-4 my-4">
            <h2 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] ss:leading-[75px] leading-[40px]">
              Your {" "}
              <span className="text-gradient-yellow">Layouts</span>
            </h2>
            <h4 className="font-poppins ss:text-[50px] text-[20px] ss:leading-[50px] leading-[30px]">
              Locations visualized
            </h4>
          </div>

          <div className="flex-col bg-black-gradient-2 w-[700px] h-[250px] rounded-sm p-4 my-4">
            <h2 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] ss:leading-[75px] leading-[40px]">
              Your {" "}
              <span className="text-gradient-red">Plans</span>
            </h2>
            <h4 className="font-poppins ss:text-[50px] text-[20px] ss:leading-[50px] leading-[30px]">
              3...2...1... Execute
            </h4>
          </div>

        </div>
        </div>
      </div>
    </Container>
  )
}
