import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {    

    articels=[
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EU tells members to cut gas usage amid new Putin warning - Reuters",
            "description": "The European Union told members states on Wednesday to cut gas usage by 15% until March as part of an emergency plan after President Vladimir Putin warned that Russian supplies sent via the biggest pipeline to Europe could be reduced further.",
            "url": "https://www.reuters.com/business/energy/europe-races-cut-russian-gas-usage-amid-new-putin-warning-2022-07-20/",
            "urlToImage": "https://www.reuters.com/resizer/XwnA9s6JgPPKpyEUsf4KTVsoKSg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2IUGRQDFARMHVI3RHLLVF3W2EU.jpg",
            "publishedAt": "2022-07-20T12:26:00Z",
            "content": "BRUSSELS/LONDON, July 20 (Reuters) - The European Union told members states on Wednesday to cut gas usage by 15% until March as part of an emergency plan after President Vladimir Putin warned that Ru… [+5596 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Lawrence Richard",
            "title": "Mortgage demand hits 22-year low as loan applications continue to drop - Fox Business",
            "description": "Mortgage applications are at the lowest they have been in the last 22 years, as inflation continues to rattle the housing market.",
            "url": "https://www.foxbusiness.com/markets/mortgage-demand-hits-22-year-low-loan-applications-continue-drop",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/0/0/GettyImages-1241733217.jpg?ve=1&tl=1",
            "publishedAt": "2022-07-20T11:12:23Z",
            "content": "Mortgage applications decreased last week, the third week in a row, as they now sit at the lowest level since 2000, according to a new survey.\r\nOn Wednesday, the Mortgage Bankers Association (MBA) re… [+1941 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Ryan Leston",
            "title": "A Quiet Place: Day One Set For March 2024 Release - IGN - IGN",
            "description": "A Quiet Place spin-off, A Quiet Place: Day One, is heading to theaters in March 2024 after being pushed back from its earlier release date.",
            "url": "https://www.ign.com/articles/a-quiet-place-day-one-set-for-march-2024-release",
            "urlToImage": "https://assets-prd.ignimgs.com/2021/10/26/quiet-place-1635256853250.jpg?width=1280",
            "publishedAt": "2022-07-20T11:06:59Z",
            "content": "Upcoming horror spin-off A Quiet Place: Day One is heading to theaters on March 8, 2024.\r\nOriginally announced last year, the upcoming spinoff was expected to debut later this year. Although its tech… [+2036 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky.com"
            },
            "author": "Alexander Martin",
            "title": "Meteoroid hit has caused 'significant uncorrectable' damage to James Webb Space Telescope - Sky News",
            "description": "",
            "url": "https://news.sky.com/story/meteoroid-hit-has-caused-significant-uncorrectable-damage-to-james-webb-space-telescope-12655489",
            "urlToImage": "https://e3.365dm.com/22/07/1600x900/ef0a4d4a6ec42d735bdbf6ef3078753c0b7c8385377324f21a2e6075ab216521_5831653.jpg?20220720095750",
            "publishedAt": "2022-07-20T10:13:43Z",
            "content": "NASA has reported that a meteoroid hit on the James Webb Space Telescope has caused \"significant uncorrectable\" damage to one of the panels it uses to stare into deep space.\r\nThe orbiting observatory… [+3103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cbslocal.com"
            },
            "author": "CBS3 Staff",
            "title": "Sesame Place Apologizes After Viral Video Appears To Show Mascot Refusing To High-Five 2 Young Black Girls - CBS Philly",
            "description": "Sesame Place acknowledged Tuesday it's aware of the incident, saying in a statement it's \"taking actions to do better.\"",
            "url": "https://philadelphia.cbslocal.com/2022/07/20/sesame-place-racism-incident-rosita-statement/",
            "urlToImage": "https://philadelphia.cbslocal.com/wp-content/uploads/sites/15116066/2022/07/snapshot-5-12.jpg?w=1280",
            "publishedAt": "2022-07-20T09:00:00Z",
            "content": "LANGHORNE, Pa. (CBS) On Wednesday morning, were hearing from a mother who posted a viral video that appears to show a character at Sesame Place snubbing two young Black girls. The video has well over… [+3860 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Brendan Cole",
            "title": "Video of Putin's Right Arm Sparks Debate Over Russian Leader's Health - Newsweek",
            "description": "A clip of the Russian president stepping off a plane in Iran has reignited the speculation about his medical condition and \"gunslinger's gait.\"",
            "url": "https://www.newsweek.com/putin-russia-arm-kgb-walk-iran-kremlin-illness-parkinsons-1726210",
            "urlToImage": "https://d.newsweek.com/en/full/2081231/vladimir-putin.jpg",
            "publishedAt": "2022-07-20T08:54:53Z",
            "content": "Vladimir Putin may have a reputation for strong-arming world leaders, but speculation is rife over the Russian president's appearance in Iran with a seemingly listless limb.\r\nJournalists and social m… [+2935 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. House passes bill protecting marriage equality - Reuters",
            "description": "The U.S. House of Representatives on Tuesday passed a bill protecting gay marriage rights, after the Supreme Court's decision to overturn Roe v. Wade imperiled similar precedents that protected rights to same-sex relations and contraception.",
            "url": "https://www.reuters.com/legal/government/us-house-poised-pass-bill-protecting-marriage-equality-2022-07-19/",
            "urlToImage": "https://www.reuters.com/resizer/jVaxlrjGFabH79Mwl72pELCtSE8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZV6MOAABK5KPJGVU7GOSWY3VMM.jpg",
            "publishedAt": "2022-07-20T07:49:00Z",
            "content": "WASHINGTON, July 19 (Reuters) - The U.S. House of Representatives on Tuesday passed a bill protecting gay marriage rights, after the Supreme Court's decision to overturn Roe v. Wade imperiled similar… [+2547 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Jesse O’Neill",
            "title": "'Complete hell': Texas man describes monkeypox battle - New York Post ",
            "description": "“The entire pain was just constant,” the patient reportedly said.",
            "url": "https://nypost.com/2022/07/20/texas-man-describes-monkeypox-battle/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/07/monkeypox-5.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-07-20T04:39:00Z",
            "content": "A Texas man described his “traumatic” battle with monkeypox as more than 2,000 cases are documented across the US.\r\nThe patient, Luke Shannahan, told Houston’s KHOU 11 that his ordeal started after t… [+1863 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Karoun Demirjian, Mariana Alfaro",
            "title": "Russia seeks to annex Ukraine's east, south later this year, U.S. says - The Washington Post",
            "description": "In Russian-occupied areas, Moscow is installing Russian banks and forcing residents to apply for Russian citizenship, the White House said.",
            "url": "https://www.washingtonpost.com/national-security/2022/07/19/russia-annexation-ukraine-john-kirby/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EVXOT3H4FAI6ZM45OEYJC2ABJM.jpg&w=1440",
            "publishedAt": "2022-07-20T03:50:00Z",
            "content": "Comment on this story\r\nThe White House on Tuesday doubled down on its assertion that Russia will try to annex additional Ukrainian territory, warning that Moscow intends toclaim as its own large swat… [+4496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "The Athletic Staff",
            "title": "Hornets forward Miles Bridges facing domestic violence, child abuse charges after June arrest - The Athletic",
            "description": "According to the criminal complaint, Bridges allegedly assaulted his girlfriend in front of their two children on or about June 27 and 28.",
            "url": "https://theathletic.com/news/hornets-miles-bridges-arrest-charges/VanBe1mCsjUd/",
            "urlToImage": "https://cdn-media.theathletic.com/VanBe1mCsjUd_VanBe1mCsjUd_7mfV83sL5dSC_original_1440x995.jpg",
            "publishedAt": "2022-07-20T01:49:06Z",
            "content": "Charlotte Hornets forward Miles Bridges was charged with one felony count of injuring a child's parent and two felony counts of child abuse, Los Angeles County District Attorney George Gascón announc… [+1336 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KCRG"
            },
            "author": "KCRG Staff",
            "title": "First case of monkeypox confirmed in Johnson County - KCRG",
            "description": "People usually develop monkeypox 7 to 14 days (up to 21 days) after being exposed.",
            "url": "https://www.kcrg.com/2022/07/20/first-case-monkeypox-confirmed-johnson-county/",
            "urlToImage": "https://gray-kcrg-prod.cdn.arcpublishing.com/resizer/2qyYtxt-QQBSBSvLRHWasryT0Kk=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/FQ5M4WPWI5BW3HGWWIZO6MYZPM.jpg",
            "publishedAt": "2022-07-20T01:41:00Z",
            "content": "JOHNSON COUNTY, Iowa (KCRG) - Johnson County Public Health is working closely with the Iowa Department of Public Health to investigate the circumstances regarding the first confirmed case of monkeypo… [+762 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Salon"
            },
            "author": "Melanie McFarland",
            "title": "\"Aftershock\" directors on how the anti-midwife campaign wrought the Black maternal mortality crisis - Salon",
            "description": "Directors Paula Eiselt and Tonya Lewis Lee discuss new Hulu documentary \"Aftershock\" and needing midwives",
            "url": "https://www.salon.com/2022/07/19/aftershock-hulu-paula-eiselt-tonya-lewis-lee-black-birth-midwife/",
            "urlToImage": "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/07/aftershock-still01.jpg",
            "publishedAt": "2022-07-20T00:16:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "SpaceNews"
            },
            "author": "Jeff Foust",
            "title": "NASA selects Falcon Heavy to launch Roman Space Telescope - SpaceNews",
            "description": "NASA picked SpaceX to launch the Nancy Grace Roman Space Telescope on a Falcon Heavy, but at a price significantly higher than previous agency contracts.",
            "url": "https://spacenews.com/nasa-selects-falcon-heavy-to-launch-roman-space-telescope/",
            "urlToImage": "https://spacenews.com/wp-content/uploads/2022/07/roman-space-telescope.jpg",
            "publishedAt": "2022-07-19T23:11:37Z",
            "content": "WASHINGTON NASA has selected SpaceX to launch the Nancy Grace Roman Space Telescope on a Falcon Heavy, but at a price significantly higher than previous agency contracts.\r\nNASA announced July 19 that… [+3721 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Antonio G. Di Benedetto",
            "title": "You can now reserve a Galaxy Z Fold 4 or Z Flip 4 preorder for credit - The Verge",
            "description": "Ahead of Samsung’s Unpacked event, scheduled for August 10th at 9AM ET, you can already reserve the next Galaxy devices for free for up to $200 credit. This qualifies with upcoming foldable phones, smartwatches, and earbuds.",
            "url": "https://www.theverge.com/2022/7/19/23270390/samsung-unpacked-2022-z-fold-flip-4-early-reservation-credit-announcement",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ZUFHhQYXmVzTLQjmlXIH4h4JEro=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16317091/acastro_190503_1777_samsung_0001.0.jpg",
            "publishedAt": "2022-07-19T23:00:00Z",
            "content": "Your name and email address can be worth a good amount\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nAn… [+2143 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Seung Min Kim, Chris Megerian",
            "title": "Biden holds off — for now — on climate emergency declaration - The Associated Press",
            "description": "WASHINGTON (AP) — President Joe Biden will travel to Massachusetts on Wednesday to promote new efforts to combat climate change, although he will not declare an emergency that would unlock federal resources to deal with the issue despite increasing pressure f…",
            "url": "https://apnews.com/article/climate-biden-joe-manchin-and-environment-bed0159741405159639f800aec3b079b",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/ad4cafea55af45df9a4e54851e134334/3000.jpeg",
            "publishedAt": "2022-07-19T22:02:25Z",
            "content": "WASHINGTON (AP) President Joe Biden will travel to Massachusetts on Wednesday to promote new efforts to combat climate change, although he will not declare an emergency that would unlock federal reso… [+5439 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Victoria Albert",
            "title": "Armed civilian neutralized Indiana mall shooter in just 15 seconds, authorities say - CBS News",
            "description": "Three victims were killed and two more were wounded in the attack.",
            "url": "https://www.cbsnews.com/news/indiana-mall-shooting-elisjsha-dicken-neutralized-gunman-15-seconds/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/07/18/510de02a-a931-4c46-afe1-36129077f532/thumbnail/1200x630/9696cf0860949eb09aca04645ed27a4f/gettyimages-1241976101.jpg",
            "publishedAt": "2022-07-19T21:40:52Z",
            "content": "It took just 15 seconds for an armed civilian to neutralize a man who opened fire in a mall food court in Indiana on Sunday, authorities said. Three victims were killed and two more were wounded in t… [+2915 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Airbus, Boeing court Air India in blockbuster aircraft upgrade - Economic Times",
            "description": "The Indian carrier is considering Boeings narrow-body planes alongside the Airbus A350 jets, as part of a fleet renewal under new owner Tata Group, according to people familiar with the negotiations. Airbuss long wait time for A320neo delivery slots may const…",
            "url": "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/airbus-boeing-court-air-india-in-blockbuster-aircraft-upgrade/articleshow/92990040.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-92990029,width-1070,height-580,imgsize-26000,overlay-economictimes/photo.jpg",
            "publishedAt": "2022-07-19T19:39:00Z",
            "content": "The potential blockbuster deal of this years Farnborough air show still hangs in the balance, with Airbus SE growing more confident it can secure a landmark purchase of about 50 A350 wide-body jets f… [+2885 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/kris-holt",
            "title": "Google will start field testing its next-gen AR glasses this August - Engadget",
            "description": "Here's hoping there are no Glassholes this time..",
            "url": "https://www.engadget.com/google-prototype-ar-glasses-testing-public-191041392.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-07/3b9b0c30-0792-11ed-bf7e-a757152e9b8c",
            "publishedAt": "2022-07-19T19:11:50Z",
            "content": "Back at I/O 2022 in May, Google\r\n teased the return of its augmented reality glasses by showing an early prototype\r\n of its next-gen glasses. Now, the company is just about ready to start real-world … [+1539 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Things to know about the dreaded Marburg virus disease - Al Jazeera English",
            "description": "As cases are reported in Ghana, here’s a look at the disease, its symptoms and ways of preventing the illness.",
            "url": "https://www.aljazeera.com/news/2022/7/19/what-to-know-about-the-marburg-virus-disease",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/07/AP383650526882.jpg?resize=1200%2C630",
            "publishedAt": "2022-07-19T16:19:30Z",
            "content": "Health authorities in Ghana have officially confirmed two cases of the highly infectious Marburg virus in the country, after two people after two people who later died, tested positive for the virus … [+4013 chars]"
        }
    ]

    constructor(){
        super();
        this.state={
            articels:this.articels
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Insta News -Top Daily Headlines</h2>
                <div className="row my-4">
                {this.state.articels.map((element) =>{
                    return(
                    <div className="col-md-4 my-2" key={element.url}>
                        <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,90)} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    )
                })}
                </div>                
            </div>
        )
    }
}

export default News