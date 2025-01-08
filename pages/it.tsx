import React from 'react'
import MainLayout from '../components/MainLayout'
import MainContainer from '../components/MainContainer/MainContainer'
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs'
import Image from 'next/image';

const It = () => {
    return (
        <MainLayout title="Уйти в IT | АПКРФ.НЕТ">
            <MainContainer>
                <Breadcrumbs crumbs={['Уйти в IT']} links={['/it']} />
                <div style={{display:'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem'}}>
                    <Image
                        src="/images/basic/1.png"
                        alt="1"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/2.png"
                        alt="2"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/3.png"
                        alt="3"
                        width={400}
                        height={600}
                        unoptimized
                    />
                     <Image
                        src="/images/basic/4.png"
                        alt="4"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/5.png"
                        alt="5"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/6.png"
                        alt="6"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/7.png"
                        alt="7"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/8.png"
                        alt="7"
                        width={400}
                        height={600}
                        unoptimized
                    />
                    <Image
                        src="/images/basic/9.png"
                        alt="7"
                        width={400}
                        height={600}
                        unoptimized
                    />
                     <Image
                        src="/images/basic/10.png"
                        alt="7"
                        width={400}
                        height={600}
                        unoptimized
                    />
                </div>
            </MainContainer>
        </MainLayout>
    )
}

export default It