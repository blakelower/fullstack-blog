import React from 'react';
import trending from '../mocks/trending';
import {PostMasonry} from '../components/common/index'

export default function Home () {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} columns={3} />
            </div>
        </section>
    )
}