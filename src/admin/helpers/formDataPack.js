export const packWorkToFormData = work => {    
    const formData = new FormData();

    formData.append('title', work.title);
    formData.append('techs', work.techs);
    formData.append('link', work.link);
    formData.append('photo', work.photo);
    formData.append('description', work.description);

    return formData;
}

export const packReviewToFormData = review => {    
    const formData = new FormData();    
    formData.append('text', review.text);
    formData.append('occ', review.occ);
    formData.append('author', review.author);
    formData.append('photo', review.photo);

    return formData;
}