import { FC, useState } from "react"
import { Text } from '../../ui/text';
import { Button } from "../../ui/button";

export const Test: FC = () => {
    let [item, setItem] = useState(0);
    return (
        <>
            <div>TEST PAGE</div>
            <Text type="param">Text Styled Component</Text>
            <Text type="header">Text Styled Component</Text>
            <Button type="common" size='medium' disabled>Button text</Button>
            <Button type="common" size='medium' onClick={() => {setItem(++item); console.log('item', item)}}>Button text</Button>
        </>
    )
}