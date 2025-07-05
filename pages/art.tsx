import React from 'react'
import MainLayout from '../components/MainLayout'
import MainContainer from '../components/MainContainer/MainContainer'
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs'
import Image from 'next/image';

const Art = () => {
    return (
        <MainLayout title="Творчество участников | АПКРФ.НЕТ">
            <MainContainer>
                <Breadcrumbs crumbs={['Творчество участников']} links={['/art']} />
                <div style={{display:'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem'}}>
                    <Image
                        src="/images/art/art_1.jpg"
                        alt="1"
                        width={600}
                        height={600}
                        unoptimized
                    />
                </div>
            </MainContainer>
        </MainLayout>
    )
}

export default Art