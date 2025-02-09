/**
File Name : ParkList
Description : 내주변 공원 리스트
Author : 임지영

History
Date        Author   Status    Description
2024.06.14  임지영    Created   
2024.06.16  김유림    Modified   각 리스트 클릭시 onParkClick함수 실행 
2024.06.17  임지영    Modified   API 연결
2024.06.17  김유림    Modified   api 와 맞게 더미데이터 수정 
2024.06.19  임지영    Modified   공원이 적어도 ParkList 높이 일정하게
2024.06.22  김유림    Modified   ParkListContainer margin-top 수정
*/

import React from 'react'
import styled from 'styled-components'
import '../../../assets/fonts/font.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import {StyledEngineProvider} from '@mui/styled-engine'
import ParkName from '../../common/ParkName'
import {useDispatch, useSelector} from 'react-redux'
import Empty from '../../common/Empty'
import {setSelectedParkId} from '../../redux/parkSlice'

const ParkListContainer = styled.div`
    font-family: 'Pretendard';
    display: flex;
    flex-direction: column;
    height: 270px;
    margin-top: 10px;
`

const List = styled.div`
    margin-bottom: 16px;
    cursor: pointer;
`

const Number = styled.p`
    font-weight: 800;
    font-size: 18pt;
    width: 20px;
    text-align: center;
`

const ParkList = () => {
    const dispatch = useDispatch()
    const {searchResults, isPark} = useSelector(state => state.park)

    console.log(searchResults)
    return (
        <StyledEngineProvider injectFirst>
            <ParkListContainer>
                <ParkListContainer>
                    {Array.isArray(searchResults.data) ? (
                        isPark === false ? (
                            <Empty text="공원이름으로 검색해주세요" />
                        ) : searchResults.data.length > 0 ? (
                            searchResults.data
                                .slice(0, 5)
                                .map((park, index) => (
                                    <List
                                        key={index}
                                        onClick={() =>
                                            dispatch(setSelectedParkId(park.id))
                                        }
                                    >
                                        <Stack direction="row" spacing={1.5}>
                                            <Number>{index + 1}</Number>
                                            <ParkName
                                                name={park.name}
                                                address={park.address}
                                            />
                                            <Rating
                                                name="half-rating"
                                                defaultValue={
                                                    park.average_review
                                                }
                                                precision={0.5}
                                                readOnly
                                            />
                                        </Stack>
                                    </List>
                                ))
                        ) : (
                            <Empty text="공원을 검색해보세요" />
                        )
                    ) : (
                        <Empty text="공원을 검색해보세요" />
                    )}
                </ParkListContainer>
            </ParkListContainer>
        </StyledEngineProvider>
    )
}

export default ParkList
