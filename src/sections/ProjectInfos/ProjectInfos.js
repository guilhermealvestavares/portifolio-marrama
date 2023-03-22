import { DescriptionWithTitle } from "../../components/Description";
import { Wrapper, Roles, Infos } from "./ProjectInfos.style";

export const ProjectInfos = ({ paper, time, roles }) => (
  <>
    <Wrapper>
      <Infos>
        <DescriptionWithTitle
          template="template01"
          title="Papel"
          text={paper}
        />
        <DescriptionWithTitle template="template01" title="Tempo" text={time} />
      </Infos>
      <Roles>
        <DescriptionWithTitle
          template="template03"
          title="Roles"
          roles={roles}
        />
      </Roles>
    </Wrapper>
  </>
);
