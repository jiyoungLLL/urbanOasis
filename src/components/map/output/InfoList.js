/**
File Name : InfoList
Description : 공원 정보 리스트 컴포넌트
Author : 김유림

History
Date        Author   Status    Description
2024.06.14  김유림    Created   공원 정보 리스트 컴포넌트
2024.06.15  임지영    Modified  리스트 컨테이너 높이 수정
2024.06.15  김유림    Modified  리스트 컨테이너 높이 수정
2024.06.16  김유림    Modified  park 받아와서 공원정보 리스트 나열 높이 고정
2024.06.17  김유림    Modified  api 데이터 형식에 맞춘 리스트로 변경
2024.06.18  김유림    Modified  스크롤바 활성화 경우 추가
2024.06.19  임지영    Modified  더미데이터 삭제, API 연결 && facility 함수 수정 필요
2024.06.19  임지영    Modified  facilities 함수 수정 완료, 버튼 위치 조정
2024.06.19  임지영    Modified  InfoListContainer padding 10px 변경
*/
import React from 'react'
import styled from 'styled-components'
import {StyledEngineProvider} from '@mui/styled-engine'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import LocationIcon from '../../../assets/images/location.svg'
import DivisionIcon from '../../../assets/images/division.svg'
import TelIcon from '../../../assets/images/telephone.svg'
import InformationIcon from '../../../assets/images/information.svg'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const InfoListContainer = styled.div`
    width: 100%;
    max-width: 370px;
    height: 340px; /* 높이 고정 */
    border-radius: 16px;
    // margin: 5px;
    background-color: #ffffff; /* 배경색 설정 */
    border: 1px solid #e0e0e0; /* 테두리 설정 */
    overflow-y: scroll; /* 스크롤 항상 활성화 */
    padding: 10px;

    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888; /* 스크롤바 색상 */
        border-radius: 16px;
    }
`

const StyledList = styled(List)`
    padding: 0;
`

const InfoItem = ({icon, primary, secondary}) => (
    <ListItem sx={{paddingBottom: 0}}>
        <ListItemAvatar>
            <img src={icon} alt={`${primary} Icon`} />
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
)

const InfoList = ({park, facilities}) => {
    return (
        <StyledEngineProvider injectFirst>
            <Container>
                <InfoListContainer>
                    <StyledList>
                        <InfoItem
                            icon={LocationIcon}
                            primary="주소"
                            secondary={park?.address}
                        />
                        <InfoItem
                            icon={DivisionIcon}
                            primary="공원구분"
                            secondary={park?.type}
                        />
                        <InfoItem
                            icon={TelIcon}
                            primary="전화번호"
                            secondary={park?.phone_number}
                        />
                        {/* 운동 및 편익 시설을 리스트로 표시 */}
                        {facilities && (
                            <>
                                {facilities.map((facility, index) => (
                                    <InfoItem
                                        key={`facility-${index}`}
                                        icon={InformationIcon}
                                        primary={facility.category}
                                        secondary={facility.name}
                                    />
                                ))}
                            </>
                        )}
                    </StyledList>
                </InfoListContainer>
            </Container>
        </StyledEngineProvider>
    )
}

export default InfoList
