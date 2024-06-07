import React from 'react'
import { DetailLayout } from '../layouts/detail'
import PostDetailComponent from '../modules/postDetail/post-detail.component'

export default function IndexDetailPage() {
	return <PostDetailComponent />
}
IndexDetailPage.Layout = DetailLayout
