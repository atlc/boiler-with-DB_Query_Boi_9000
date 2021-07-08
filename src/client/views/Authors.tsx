import React, { useState, useEffect } from 'react';
import { authors } from '../../types';
import { GET } from '../services/fetchExtender';

const Authors = () => {
    const [authors, setAuthors] = useState<authors[]>([]);

    useEffect(() => {
        GET('/api/authors')
        .then(res => setAuthors(res))
    }, []);

    return (
        <div>
            {authors.map(a => (
                <div key={`author-card-${a.id}`} className="card">
                    <div className="card-header">
                        {a.first_name} {a.last_name}
                    </div>
                    <div className="card-body">
                        {a.email}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Authors;
