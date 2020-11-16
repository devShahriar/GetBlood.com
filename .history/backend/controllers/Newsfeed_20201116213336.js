//controller newsfeed 


exports.getFeed=(req, res , next)=> {
    res.json({
        user:'shahriar',
        Blood_tag:'O+',
        Header: 'Need blood at gulbag',
        Description: 'Emergency need of blood'
    })
}