xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Talks"
    xml.description "Talks"    
    xml.link root_url

    @posts.each do |post|
      xml.item do
        xml.title post.title
        xml.description post.conversation.markdown.typography.html_safe
        xml.author post.user.username
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.link post_url(post)
        xml.guid post_url(post)
      end
    end
  end
end