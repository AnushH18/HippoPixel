import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf, Link } from "lucide-react";
import { Button } from "@/components/ui/button"

const perks = [
  {
    Name: "Instant Delivery",
    Icon: ArrowDownToLine,
    Description: "Get your assets delivered to your email in seconds and download them right away."
  },
  {
    Name: "Guaranteed Quality",
    Icon: CheckCircle,
    Description: "Every asset is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-days defund guarantee."
  },
  {
    Name: "For the Planet",
    Icon: Leaf,
    Description: "We've pledged 1% of sales to the preservation and restoration of the natural environment."
  },
]


export default function Home() {
  return (<>
    <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Your marketplace for high quality{' '}
          <span  className="text-blue-600">digital assets</span>.
        </h1>

        <p className="mt-8 text-lg max-w-prose text-muted-foreground">
          Welcome to HippoPixels. Every asset on our platform is verified by our team to ensure our highest quality standatds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* <Link href="/products" className={buttonVariants()}>Browse Trending</Link> */}
          <Button><a href="/products">Browse Trending</a></Button>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
    </div>


  </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20 ">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div key= {perk.Name} className="text-center md:flem md:items-start md:text-left lg:block lg:text-center">
                    <div className="md:flex-shrink-0 flex justify-center">
                      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                        {<perk.Icon className="w-1/3 h-1/3" />}
                      </div>
                    </div>

                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-base font-medium text-gray-900">{perk.Name}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {perk.Description}
                        </p>
                      </div> 
                </div>
              ))}
          </div>
      </MaxWidthWrapper>
    </section>

  </>)
}
