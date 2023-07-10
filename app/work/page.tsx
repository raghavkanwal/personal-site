import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { badgeVariants } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import styles from './workpage.module.scss'

import history from './work-history.json'

export default function WorkPage() {
    return (<main>
        <h1><span>Work</span></h1>
        {/* <p>Work page comes here.</p> */}
        <Card>
            <CardHeader>
                <CardTitle>Lead UI Engineer</CardTitle>
                <CardDescription>Unicommerce, June 2018 - May 2023</CardDescription>
            </CardHeader>
            <CardContent className="mt-0">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Roles and Responsibilities</AccordionTrigger>
                        <AccordionContent>
                            <ul className={styles.bulletPoints}>
                                <li className="mb-2">Developed &amp; maintained features for web applications used by more than 20,000 e-commerce businesses to manage over 600 million transactions annually.</li>
                                <li className="mb-2">Mentored and led a team of eight frontend developers in engineering the front- end for a SaaS product in the Order and Warehouse management domain, built with Angular and lonic.</li>
                                <li className="mb-2">Contributed to the design and implementation of a UX guideline and reusable UI component system based on Angular and Storybook.</li>
                                <li className="mb-2">Led front-end development for new SaaS products in the e-commerce shipping and logistics sector, utilizing Next.js and React. </li>
                                <li className="mb-2">Implemented, maintained and worked on the sunset process of an in-house Javascript framework built with vanilla JS and legacy libraries such as jQuery, Backbone and Underscore, among others.</li>
                                <li className="mb-2">Involved in the hiring and onboarding process: screening and interviewing candidates, evaluating tech assignments, onboarding new team members.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
                <div className="flex gap-x-2 flex-wrap">
                    { history.unicommerce.map((skill, idx) => <span key={idx} className={`${badgeVariants({ variant: "outline" })} mb-2`}>{skill}</span>)}
                </div>
            </CardFooter>
        </Card>
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Frontend Engineer</CardTitle>
                <CardDescription>iimjobs.com, Aug 2016 - May 2018</CardDescription>
            </CardHeader>
            <CardContent className="mt-0">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Roles and Responsibilities</AccordionTrigger>
                        <AccordionContent>
                            <ul className={styles.bulletPoints}>
                                <li>Improved page load times by 50% by improving core web vitals thereby reducing user friction and increasing engagement.</li>
                                <li>Collaborated with designers to develop a platform for recruiters to manage and search over 1 million resumes with a focus on innovative features and UX. </li>
                                <li>Steered the engineering direction for a new PWA to be used as a jobseeker portal with a focus on accessibilty and performance, built using React and NodeS.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
            <div className="flex gap-x-2 flex-wrap">
                    { history.iimjobs.map((skill, idx) => <span key={idx} className={`${badgeVariants({ variant: "outline" })} mb-2`}>{skill}</span>)}
                </div>
            </CardFooter>
        </Card>
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>UI/UX Developer</CardTitle>
                <CardDescription>Mobikasa Inc, Sept 2014 - Aug 2016</CardDescription>
            </CardHeader>
            <CardContent className="mt-0">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Roles and Responsibilities</AccordionTrigger>
                        <AccordionContent>
                            <ul className={styles.bulletPoints}>
                                <li>Successfully built and delivered over 40 projects in the e-commerce domain, utilizing a wide range of tools including WordPress, Shopify, Magento, and woocommerce with a focus on optimizing ease of use and pertormance.</li>
                                <li>Helped boost customer engagement up 20% by designing and implementing micro-sites and email templates for marketingcampaigns driven by social media.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
            <div className="flex gap-x-2 flex-wrap">
                    { history.mobikasa.map((skill, idx) => <span key={idx} className={`${badgeVariants({ variant: "outline" })} mb-2`}>{skill}</span>)}
                </div>
            </CardFooter>
        </Card>
    </main>)
}