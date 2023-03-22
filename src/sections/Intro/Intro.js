import { DescriptionWithTitle } from "../../components/Description";
import { Wrapper, Intro as IntroWrapper, Objectives } from "./Intro.style";

export const Intro = ({ intro, objectives }) => (
  <>
    <Wrapper>
      <IntroWrapper>
        <DescriptionWithTitle
          template="template01"
          title="Intro"
          text={intro}
        />
      </IntroWrapper>
      <Objectives>
        <DescriptionWithTitle
          template="template01"
          title="Objetivo"
          text={objectives}
        />
      </Objectives>
    </Wrapper>
  </>
);
