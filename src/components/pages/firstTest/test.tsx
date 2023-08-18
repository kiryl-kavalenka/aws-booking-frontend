import { FC, useState, useEffect, useRef } from "react"
import 'react-phone-number-input/style.css'
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    width: 100vw;
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
    font-size: 1rem;
    
    div {
        transform: rotate(45deg);
    }
`

export const Test: FC = () => {
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
        console.log('remove', index)
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
        console.log('imageURLs', imageURLs);
        console.log('images', images)
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

    return (
        <>
            <div>TEST PAGE</div>
            <Wrapper>{imagePlaceholders}</Wrapper>
        </>
    );
};
