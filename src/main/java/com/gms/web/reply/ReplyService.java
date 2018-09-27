package com.gms.web.reply;

import java.util.List;


public interface ReplyService {

  public void addReply(Reply vo) throws Exception;

  public List<Reply> listReply(Integer bno) throws Exception;

  public void modifyReply(Reply vo) throws Exception;

  public void removeReply(Integer rno) throws Exception;

/*  public List<Reply> listReplyPage(Integer bno, Criteria cri) 
      throws Exception;*/

  public int count(Integer bno) throws Exception;
}
