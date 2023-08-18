import { FC, useEffect, useRef, useState } from "react";
import { Text } from '../../../ui/text';
import { Button } from "../../../ui/button";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    width: 100%;
    gap: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImpageInputPlaceholder = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    height: 200px;
    border-radius: 2%;
    font-size: 300%;
    color: #c1c1c3;
    cursor: pointer;
    overflow: hidden;

    input {
        display: none;
    }
`

const DeleteImageButton = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #f7f9f4;
    color: #8b8b8a;
    border: 1px solid #f7f9f4;
    font-size: 1rem;

    transition: background-color 0.3s linear;
    transition: color 0.3s linear;
    transition: border 0.3s linear;

    &:hover {
        background-color: #f7f9f4;
        color: #272424;
        border: 1px solid #272424;
    }
    
    div {
        transform: rotate(45deg);
    }
`
interface Step8Props {
    goAhead: () => void;
}

export const Step8: FC<Step8Props> = ({goAhead}) => {
    const [canFinish, setCanFinish] = useState<boolean>(false);

    const [images, setImages] = useState<File[]>(Array.from({length: 6}));
    const [imageURLs, setimageURLs] = useState<string[]>([]);
    const fileInputRefs = useRef<HTMLInputElement[]>(Array.from({length: 6}));

    const handleDivClick = (index: number) => {
        const inputRef = fileInputRefs.current[index];
        if (inputRef) {
            inputRef.click();
       }
    };

    const handleRemoveImage = (index: number) => {
        setimageURLs(prev => {
            prev[index] = '';
            return [...prev]
        })
        setImages(prev => {
            prev[index] = new File([], "empty.txt", { type: "text/plain" });
            return [...prev];
        })
    }

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const index = Number(e.target.id);
        const selectedImages = e.target.files;

        if (selectedImages) {
            const newImagesArray: File[] = Array.from(selectedImages);
            setImages(prev => {
                prev[index] = newImagesArray[0];
                return prev = [...prev]
            });
        }
    }

    useEffect(() => {
        if (images.length < 1) return;

        const newImageURLs: string[] = images.map(image => {
            if (image && image.size !== 0) {
                return URL.createObjectURL(image)
            } else {
                return ''
            }
        });
        setimageURLs(prev => prev = newImageURLs);

        return () => {
            newImageURLs.forEach(url => URL.revokeObjectURL(url));
        };
    }, [images]);

    useEffect(() => {
        const lengthOfRealImages = images.filter(image => {
            if (image) {
                return image.size !== 0
            } else {
                return false
            }
        }).length
        setCanFinish(prev => prev = !!lengthOfRealImages)
    }, [imageURLs, images])

    const imagePlaceholders = Array.from({ length: 6 }, (_, index) => (
        <ImpageInputPlaceholder key={index} onClick={() => handleDivClick(index)}>
            {imageURLs[index] ? (
                    <>
                        <DeleteImageButton onClick={(e: any) => {
                                e.stopPropagation()
                                handleRemoveImage(index)
                            }}>
                            <div>+</div>
                        </DeleteImageButton>
                        <img src={imageURLs[index]} alt='test' />
                    </>
                ) : (
                    <>
                        <input
                            ref={inputRef => {
                                // sometimes we get inputRef == null
                                // TODO: learn all about useRef
                                if (inputRef) {
                                    fileInputRefs.current[index] = inputRef
                                }
                            }
                            }

                            type="file"
                            accept="image/*"
                            id={`${index}`}
                            onChange={onImageChange}
                        />
                        +
                    </>
                )
            }
        </ImpageInputPlaceholder>
    ));


    const handleFinish = () => {
        console.log('finish')
        goAhead()
    }

    return(
        <>
            <Text type="header" textAlign="center">Add photos</Text>
            <Text type="param" textAlign="center">Add at least one photo to continue</Text>
            <Wrapper>{imagePlaceholders}</Wrapper>
            <Button type="common" width="100%" onClick={handleFinish} disabled={!canFinish}>Finish registration</Button>
        </>
    )
}