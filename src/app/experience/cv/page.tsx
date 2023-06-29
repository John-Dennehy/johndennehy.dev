// import Styles from "@/styles/CV.module.scss";
import { CV_QUERY } from "@/src/graphql";
import { request } from "@/lib/datoCMS";
import CV from "@/src/components/CV/CV";
import { cn } from "@/src/lib/utils";

export default async function CVPage() {
  const pageData = await request({
    query: CV_QUERY,
  });

  const { personalSummary, contactDetails, experience, skills } = pageData.cv;

  return (
    <div className={cn()}>
      {pageData && (
        <CV
          key="cv"
          name="John Dennehy"
          personalSummary={personalSummary}
          contactDetails={contactDetails}
          experience={experience}
          skills={skills}
        />
      )}
    </div>
  );
}
