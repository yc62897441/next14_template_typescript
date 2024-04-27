'use client'
import styled from 'styled-components'

import { lusitana } from '@/app/ui/fonts'

const Span = styled.span`
    font-family: ${lusitana.className};
`

function SpanComponent2() {
    return <Span>SpanComponent2</Span>
}

export default SpanComponent2
