import { HorizontalLine, TitleContainer } from "./styles";

export default function SectionTitle(props) {
    return (
        <TitleContainer>
            <p>{props.title}</p>
            <HorizontalLine />
        </TitleContainer>
    );
}
