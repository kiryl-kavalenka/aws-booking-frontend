import { FC, useEffect, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";

export const Step8: FC = () => {
    const [canFinish, setCanFinish] = useState<boolean>(false);

    


    const handleFinish = () => {
        console.log('finish')
    }

    return(
        <>
            <Text type="header" textAlign="center">Add photos</Text>
            <Text type="param" textAlign="center">Add at least one photo to continue</Text>
            <Button type="common" width="100%" onClick={handleFinish} disabled={!canFinish}>Finish registration</Button>
        </>
    )
}